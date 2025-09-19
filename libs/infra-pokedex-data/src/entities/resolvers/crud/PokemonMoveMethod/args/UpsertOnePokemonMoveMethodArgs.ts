import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodCreateInput } from "../../../inputs/PokemonMoveMethodCreateInput";
import { PokemonMoveMethodUpdateInput } from "../../../inputs/PokemonMoveMethodUpdateInput";
import { PokemonMoveMethodWhereUniqueInput } from "../../../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateInput, {
    nullable: false
  })
  create!: PokemonMoveMethodCreateInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateInput, {
    nullable: false
  })
  update!: PokemonMoveMethodUpdateInput;
}
