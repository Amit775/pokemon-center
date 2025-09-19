import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeUpdateManyMutationInput } from "../../../inputs/PokemonShapeUpdateManyMutationInput";
import { PokemonShapeWhereInput } from "../../../inputs/PokemonShapeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonShapeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;
}
