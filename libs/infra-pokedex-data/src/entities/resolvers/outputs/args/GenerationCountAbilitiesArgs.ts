import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityWhereInput } from "../../inputs/AbilityWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;
}
