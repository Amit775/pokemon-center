import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutRegionInput } from "../inputs/GenerationCreateWithoutRegionInput";
import { GenerationUpdateWithoutRegionInput } from "../inputs/GenerationUpdateWithoutRegionInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpsertWithWhereUniqueWithoutRegionInput", {})
export class GenerationUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutRegionInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutRegionInput;
}
