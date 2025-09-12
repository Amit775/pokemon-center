import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCreateWithoutSpeciesInput } from "../inputs/EggGroupsCreateWithoutSpeciesInput";
import { EggGroupsUpdateWithoutSpeciesInput } from "../inputs/EggGroupsUpdateWithoutSpeciesInput";
import { EggGroupsWhereInput } from "../inputs/EggGroupsWhereInput";

@TypeGraphQL.InputType("EggGroupsUpsertWithoutSpeciesInput", {})
export class EggGroupsUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: EggGroupsUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EggGroupsCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EggGroupsCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;
}
