import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutMachinesInput } from "../inputs/MovesCreateWithoutMachinesInput";
import { MovesUpdateWithoutMachinesInput } from "../inputs/MovesUpdateWithoutMachinesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutMachinesInput", {})
export class MovesUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
