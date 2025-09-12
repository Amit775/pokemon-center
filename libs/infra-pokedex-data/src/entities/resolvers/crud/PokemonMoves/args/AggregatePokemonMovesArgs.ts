import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesOrderByWithRelationInput } from "../../../inputs/PokemonMovesOrderByWithRelationInput";
import { PokemonMovesWhereInput } from "../../../inputs/PokemonMovesWhereInput";
import { PokemonMovesWhereUniqueInput } from "../../../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  where?: PokemonMovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMovesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
