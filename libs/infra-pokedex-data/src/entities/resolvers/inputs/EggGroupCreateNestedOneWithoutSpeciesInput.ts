import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCreateOrConnectWithoutSpeciesInput } from "../inputs/EggGroupCreateOrConnectWithoutSpeciesInput";
import { EggGroupCreateWithoutSpeciesInput } from "../inputs/EggGroupCreateWithoutSpeciesInput";
import { EggGroupWhereUniqueInput } from "../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.InputType("EggGroupCreateNestedOneWithoutSpeciesInput", {})
export class EggGroupCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EggGroupCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EggGroupCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: EggGroupWhereUniqueInput | undefined;
}
