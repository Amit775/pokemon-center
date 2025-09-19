import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboCreateManyInput } from "../../../inputs/SuperContestComboCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnSuperContestComboArgs {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateManyInput], {
    nullable: false
  })
  data!: SuperContestComboCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
