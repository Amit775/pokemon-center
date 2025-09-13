import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutAbilitiesInput } from "../inputs/PokemonCreateOrConnectWithoutAbilitiesInput";
import { PokemonCreateWithoutAbilitiesInput } from "../inputs/PokemonCreateWithoutAbilitiesInput";
import { PokemonUpdateToOneWithWhereWithoutAbilitiesInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutAbilitiesInput";
import { PokemonUpsertWithoutAbilitiesInput } from "../inputs/PokemonUpsertWithoutAbilitiesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutAbilitiesNestedInput", {})
export class PokemonUpdateOneRequiredWithoutAbilitiesNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutAbilitiesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutAbilitiesInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutAbilitiesInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutAbilitiesInput | undefined;
}
