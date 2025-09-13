import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesOrderByWithRelationInput } from "../../../inputs/PokemonFormTypesOrderByWithRelationInput";
import { PokemonFormTypesWhereInput } from "../../../inputs/PokemonFormTypesWhereInput";
import { PokemonFormTypesWhereUniqueInput } from "../../../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormTypesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
