import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonColorsCreateOrConnectWithoutSpeciesInput";
import { PokemonColorsCreateWithoutSpeciesInput } from "../inputs/PokemonColorsCreateWithoutSpeciesInput";
import { PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput";
import { PokemonColorsUpsertWithoutSpeciesInput } from "../inputs/PokemonColorsUpsertWithoutSpeciesInput";
import { PokemonColorsWhereUniqueInput } from "../inputs/PokemonColorsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonColorsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonColorsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonColorsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonColorsUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonColorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
