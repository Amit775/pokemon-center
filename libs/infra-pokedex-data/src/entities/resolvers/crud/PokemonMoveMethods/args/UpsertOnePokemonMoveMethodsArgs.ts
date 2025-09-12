import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsCreateInput } from "../../../inputs/PokemonMoveMethodsCreateInput";
import { PokemonMoveMethodsUpdateInput } from "../../../inputs/PokemonMoveMethodsUpdateInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../../../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateInput, {
    nullable: false
  })
  create!: PokemonMoveMethodsCreateInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateInput, {
    nullable: false
  })
  update!: PokemonMoveMethodsUpdateInput;
}
