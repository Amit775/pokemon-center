import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutMachinesInput } from "../inputs/MovesUpdateWithoutMachinesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutMachinesInput", {})
export class MovesUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutMachinesInput;
}
