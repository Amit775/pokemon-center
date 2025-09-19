import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupCreateInput } from "../../../inputs/PokedexVersionGroupCreateInput";
import { PokedexVersionGroupUpdateInput } from "../../../inputs/PokedexVersionGroupUpdateInput";
import { PokedexVersionGroupWhereUniqueInput } from "../../../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateInput, {
    nullable: false
  })
  create!: PokedexVersionGroupCreateInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateInput, {
    nullable: false
  })
  update!: PokedexVersionGroupUpdateInput;
}
