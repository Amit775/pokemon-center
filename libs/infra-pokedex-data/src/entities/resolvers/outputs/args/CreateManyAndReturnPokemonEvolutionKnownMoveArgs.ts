import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesWhereInput } from "../../inputs/MovesWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonEvolutionKnownMoveArgs {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
