import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyShapeInputEnvelope } from "../inputs/PokemonSpeciesCreateManyShapeInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutShapeInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutShapeInput";
import { PokemonSpeciesCreateWithoutShapeInput } from "../inputs/PokemonSpeciesCreateWithoutShapeInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutShapeInput", {})
export class PokemonSpeciesCreateNestedManyWithoutShapeInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutShapeInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyShapeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
