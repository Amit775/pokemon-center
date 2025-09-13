import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutPokemonTypesInput } from "../inputs/TypesCreateOrConnectWithoutPokemonTypesInput";
import { TypesCreateWithoutPokemonTypesInput } from "../inputs/TypesCreateWithoutPokemonTypesInput";
import { TypesUpdateToOneWithWhereWithoutPokemonTypesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutPokemonTypesInput";
import { TypesUpsertWithoutPokemonTypesInput } from "../inputs/TypesUpsertWithoutPokemonTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutPokemonTypesNestedInput", {})
export class TypesUpdateOneRequiredWithoutPokemonTypesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutPokemonTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutPokemonTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutPokemonTypesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutPokemonTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutPokemonTypesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutPokemonTypesInput | undefined;
}
