import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutRegionInput } from "../inputs/GenerationsUpdateWithoutRegionInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateWithWhereUniqueWithoutRegionInput", {})
export class GenerationsUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutRegionInput;
}
