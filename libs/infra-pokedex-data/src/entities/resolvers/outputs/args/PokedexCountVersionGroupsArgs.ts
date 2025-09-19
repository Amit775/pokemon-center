import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupWhereInput } from "../../inputs/PokedexVersionGroupWhereInput";

@TypeGraphQL.ArgsType()
export class PokedexCountVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupWhereInput | undefined;
}
