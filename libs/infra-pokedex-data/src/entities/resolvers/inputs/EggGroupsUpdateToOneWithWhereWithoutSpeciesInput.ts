import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsUpdateWithoutSpeciesInput } from "../inputs/EggGroupsUpdateWithoutSpeciesInput";
import { EggGroupsWhereInput } from "../inputs/EggGroupsWhereInput";

@TypeGraphQL.InputType("EggGroupsUpdateToOneWithWhereWithoutSpeciesInput", {})
export class EggGroupsUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: EggGroupsUpdateWithoutSpeciesInput;
}
