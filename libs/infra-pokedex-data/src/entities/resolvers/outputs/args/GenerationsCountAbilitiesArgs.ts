import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesWhereInput } from "../../inputs/AbilitiesWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationsCountAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;
}
