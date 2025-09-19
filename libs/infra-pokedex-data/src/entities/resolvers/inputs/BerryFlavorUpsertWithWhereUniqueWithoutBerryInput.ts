import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutBerryInput } from "../inputs/BerryFlavorCreateWithoutBerryInput";
import { BerryFlavorUpdateWithoutBerryInput } from "../inputs/BerryFlavorUpdateWithoutBerryInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpsertWithWhereUniqueWithoutBerryInput", {})
export class BerryFlavorUpsertWithWhereUniqueWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutBerryInput, {
    nullable: false
  })
  update!: BerryFlavorUpdateWithoutBerryInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutBerryInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutBerryInput;
}
