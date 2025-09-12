import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesUpdateWithoutMovesInput } from "../inputs/ContestTypesUpdateWithoutMovesInput";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";

@TypeGraphQL.InputType("ContestTypesUpdateToOneWithWhereWithoutMovesInput", {})
export class ContestTypesUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: ContestTypesUpdateWithoutMovesInput;
}
