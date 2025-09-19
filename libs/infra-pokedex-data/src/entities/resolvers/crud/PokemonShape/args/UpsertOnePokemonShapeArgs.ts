import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeCreateInput } from "../../../inputs/PokemonShapeCreateInput";
import { PokemonShapeUpdateInput } from "../../../inputs/PokemonShapeUpdateInput";
import { PokemonShapeWhereUniqueInput } from "../../../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonShapeCreateInput, {
    nullable: false
  })
  create!: PokemonShapeCreateInput;

  @TypeGraphQL.Field(_type => PokemonShapeUpdateInput, {
    nullable: false
  })
  update!: PokemonShapeUpdateInput;
}
