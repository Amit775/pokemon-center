import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesUpdateManyMutationInput } from "../../../inputs/PokemonShapesUpdateManyMutationInput";
import { PokemonShapesWhereInput } from "../../../inputs/PokemonShapesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonShapesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;
}
