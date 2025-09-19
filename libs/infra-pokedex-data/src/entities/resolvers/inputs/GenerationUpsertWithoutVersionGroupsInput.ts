import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutVersionGroupsInput } from "../inputs/GenerationCreateWithoutVersionGroupsInput";
import { GenerationUpdateWithoutVersionGroupsInput } from "../inputs/GenerationUpdateWithoutVersionGroupsInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutVersionGroupsInput", {})
export class GenerationUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
