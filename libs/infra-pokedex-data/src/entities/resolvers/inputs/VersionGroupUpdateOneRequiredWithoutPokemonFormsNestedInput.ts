import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutPokemonFormsInput } from "../inputs/VersionGroupCreateOrConnectWithoutPokemonFormsInput";
import { VersionGroupCreateWithoutPokemonFormsInput } from "../inputs/VersionGroupCreateWithoutPokemonFormsInput";
import { VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput";
import { VersionGroupUpsertWithoutPokemonFormsInput } from "../inputs/VersionGroupUpsertWithoutPokemonFormsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokemonFormsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutPokemonFormsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutPokemonFormsInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutPokemonFormsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutPokemonFormsInput | undefined;
}
