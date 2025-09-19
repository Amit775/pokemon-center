import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeUpdateWithoutBerryFlavorsInput } from "../inputs/ContestTypeUpdateWithoutBerryFlavorsInput";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";

@TypeGraphQL.InputType("ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput", {})
export class ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  data!: ContestTypeUpdateWithoutBerryFlavorsInput;
}
