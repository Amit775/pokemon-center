import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutAbilitiesInput } from "../inputs/GenerationCreateWithoutAbilitiesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutAbilitiesInput", {})
export class GenerationCreateOrConnectWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutAbilitiesInput;
}
