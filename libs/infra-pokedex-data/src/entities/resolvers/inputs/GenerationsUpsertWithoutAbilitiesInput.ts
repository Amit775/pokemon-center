import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutAbilitiesInput } from "../inputs/GenerationsCreateWithoutAbilitiesInput";
import { GenerationsUpdateWithoutAbilitiesInput } from "../inputs/GenerationsUpdateWithoutAbilitiesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutAbilitiesInput", {})
export class GenerationsUpsertWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
