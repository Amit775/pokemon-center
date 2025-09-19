import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutVersionGroupsInput } from "../inputs/GenerationUpdateWithoutVersionGroupsInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class GenerationUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutVersionGroupsInput;
}
