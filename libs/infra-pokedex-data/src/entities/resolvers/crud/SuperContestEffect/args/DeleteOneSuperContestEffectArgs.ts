import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectWhereUniqueInput } from "../../../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectWhereUniqueInput;
}
