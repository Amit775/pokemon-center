import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonShapeCreateOrConnectWithoutSpeciesInput";
import { PokemonShapeCreateWithoutSpeciesInput } from "../inputs/PokemonShapeCreateWithoutSpeciesInput";
import { PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput";
import { PokemonShapeUpsertWithoutSpeciesInput } from "../inputs/PokemonShapeUpsertWithoutSpeciesInput";
import { PokemonShapeWhereUniqueInput } from "../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput", {})
export class PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonShapeCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonShapeCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonShapeCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonShapeUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonShapeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
