import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutRegionInput } from "../inputs/GenerationsCreateWithoutRegionInput";
import { GenerationsUpdateWithoutRegionInput } from "../inputs/GenerationsUpdateWithoutRegionInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpsertWithWhereUniqueWithoutRegionInput", {})
export class GenerationsUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutRegionInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutRegionInput;
}
