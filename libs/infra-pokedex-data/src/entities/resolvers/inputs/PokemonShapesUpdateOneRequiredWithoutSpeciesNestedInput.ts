import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonShapesCreateOrConnectWithoutSpeciesInput";
import { PokemonShapesCreateWithoutSpeciesInput } from "../inputs/PokemonShapesCreateWithoutSpeciesInput";
import { PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput";
import { PokemonShapesUpsertWithoutSpeciesInput } from "../inputs/PokemonShapesUpsertWithoutSpeciesInput";
import { PokemonShapesWhereUniqueInput } from "../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonShapesCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonShapesCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonShapesCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonShapesUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonShapesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
