import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessUpdateInput } from "../../../inputs/BerryFirmnessUpdateInput";
import { BerryFirmnessWhereUniqueInput } from "../../../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessUpdateInput, {
    nullable: false
  })
  data!: BerryFirmnessUpdateInput;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFirmnessWhereUniqueInput;
}
