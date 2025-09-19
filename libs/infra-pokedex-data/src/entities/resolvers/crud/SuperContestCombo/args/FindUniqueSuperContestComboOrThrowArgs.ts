import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboWhereUniqueInput } from "../../../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSuperContestComboOrThrowArgs {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;
}
