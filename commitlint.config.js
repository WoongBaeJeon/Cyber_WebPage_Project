export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'chore',
        'ci',
        'build',
        'hotfix',
        'design',
        'rename',
        'remove',
      ],
    ],
    // 대문자 금지 규칙
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-trim': [2, 'always'],
    'issue-number-required': [2, 'always'],

    // 콜론 뒤 공백 필수 추가
    'type-colon-space': [2, 'always'],
  },

  // 커스텀 플러그인으로 공백 검사
  plugins: [
    {
      rules: {
        'type-colon-space': ({ header }) => {
          const pattern = /^[a-z]+:\s/
          return [
            pattern.test(header || ''),
            '콜론(:) 뒤에 공백이 필요합니다. 예: "feat: 메시지"',
          ]
        },
        'issue-number-required': ({ header }) => {
          const hasIssueNumber = /\(#\d+\)$/.test((header || '').trim())

          return [
            hasIssueNumber,
            '커밋 메시지 끝에 이슈 번호를 추가해주세요. 예) feat: 버튼 추가 (#1)',
          ]
        },
      },
    },
  ],
}
