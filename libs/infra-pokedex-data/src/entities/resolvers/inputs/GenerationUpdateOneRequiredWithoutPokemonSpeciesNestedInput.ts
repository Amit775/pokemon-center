import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutPokemonSpeciesInput } from "../inputs/GenerationCreateOrConnectWithoutPokemonSpeciesInput";
import { GenerationCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationCreateWithoutPokemonSpeciesInput";
import { GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput";
import { GenerationUpsertWithoutPokemonSpeciesInput } from "../inputs/GenerationUpsertWithoutPokemonSpeciesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput", {})
export class GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonSpeciesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutPokemonSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutPokemonSpeciesInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput | undefined;
}
