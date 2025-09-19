import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutPokemonTypesInput } from "../inputs/TypeCreateOrConnectWithoutPokemonTypesInput";
import { TypeCreateWithoutPokemonTypesInput } from "../inputs/TypeCreateWithoutPokemonTypesInput";
import { TypeUpdateToOneWithWhereWithoutPokemonTypesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutPokemonTypesInput";
import { TypeUpsertWithoutPokemonTypesInput } from "../inputs/TypeUpsertWithoutPokemonTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutPokemonTypesNestedInput", {})
export class TypeUpdateOneRequiredWithoutPokemonTypesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutPokemonTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutPokemonTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutPokemonTypesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutPokemonTypesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutPokemonTypesInput | undefined;
}
