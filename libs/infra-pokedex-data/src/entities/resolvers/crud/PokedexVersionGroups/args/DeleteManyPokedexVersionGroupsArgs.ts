import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsWhereInput } from "../../../inputs/PokedexVersionGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupsWhereInput | undefined;
}
