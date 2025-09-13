import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsWhereUniqueInput } from "../../../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSuperContestEffectsOrThrowArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectsWhereUniqueInput;
}
