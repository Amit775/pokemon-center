import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutPokemonFormsInput";
import { VersionGroupsCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateWithoutPokemonFormsInput";
import { VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput";
import { VersionGroupsUpsertWithoutPokemonFormsInput } from "../inputs/VersionGroupsUpsertWithoutPokemonFormsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonFormsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutPokemonFormsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutPokemonFormsInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput | undefined;
}
