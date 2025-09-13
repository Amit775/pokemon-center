import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesOrderByWithRelationInput } from "../../../inputs/PokemonShapesOrderByWithRelationInput";
import { PokemonShapesWhereInput } from "../../../inputs/PokemonShapesWhereInput";
import { PokemonShapesWhereUniqueInput } from "../../../inputs/PokemonShapesWhereUniqueInput";
import { PokemonShapesScalarFieldEnum } from "../../../../enums/PokemonShapesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonShapesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonShapesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
