import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosCreateManyInput } from "../../../inputs/SuperContestCombosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySuperContestCombosArgs {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateManyInput], {
    nullable: false
  })
  data!: SuperContestCombosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
