import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateOrConnectWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateOrConnectWithoutPokemonAbilitiesInput";
import { AbilityCreateWithoutPokemonAbilitiesInput } from "../inputs/AbilityCreateWithoutPokemonAbilitiesInput";
import { AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput } from "../inputs/AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput";
import { AbilityUpsertWithoutPokemonAbilitiesInput } from "../inputs/AbilityUpsertWithoutPokemonAbilitiesInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput", {})
export class AbilityUpdateOneRequiredWithoutPokemonAbilitiesNestedInput {
  @TypeGraphQL.Field(_type => AbilityCreateWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  create?: AbilityCreateWithoutPokemonAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => AbilityCreateOrConnectWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: AbilityCreateOrConnectWithoutPokemonAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => AbilityUpsertWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  upsert?: AbilityUpsertWithoutPokemonAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: true
  })
  connect?: AbilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput, {
    nullable: true
  })
  update?: AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput | undefined;
}
