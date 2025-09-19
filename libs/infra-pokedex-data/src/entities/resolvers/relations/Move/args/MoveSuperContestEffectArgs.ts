import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectWhereInput } from "../../../inputs/SuperContestEffectWhereInput";

@TypeGraphQL.ArgsType()
export class MoveSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;
}
