import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutVersionGroupsInput } from "../inputs/PokedexesCreateWithoutVersionGroupsInput";
import { PokedexesUpdateWithoutVersionGroupsInput } from "../inputs/PokedexesUpdateWithoutVersionGroupsInput";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesUpsertWithoutVersionGroupsInput", {})
export class PokedexesUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: PokedexesUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;
}
