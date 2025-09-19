import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateOrConnectWithoutPokemonFormGenerationsInput";
import { GenerationCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateWithoutPokemonFormGenerationsInput";
import { GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput";
import { GenerationUpsertWithoutPokemonFormGenerationsInput } from "../inputs/GenerationUpsertWithoutPokemonFormGenerationsInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput", {})
export class GenerationUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput | undefined;
}
