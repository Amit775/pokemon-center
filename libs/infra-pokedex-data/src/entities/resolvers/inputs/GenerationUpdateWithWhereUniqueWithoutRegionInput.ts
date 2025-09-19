import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutRegionInput } from "../inputs/GenerationUpdateWithoutRegionInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateWithWhereUniqueWithoutRegionInput", {})
export class GenerationUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutRegionInput;
}
