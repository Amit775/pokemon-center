import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexCreateInput } from "../../../inputs/PokedexCreateInput";
import { PokedexUpdateInput } from "../../../inputs/PokedexUpdateInput";
import { PokedexWhereUniqueInput } from "../../../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokedexArgs {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexCreateInput, {
    nullable: false
  })
  create!: PokedexCreateInput;

  @TypeGraphQL.Field(_type => PokedexUpdateInput, {
    nullable: false
  })
  update!: PokedexUpdateInput;
}
