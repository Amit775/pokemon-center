import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessOrderByWithRelationInput } from "../../../inputs/BerryFirmnessOrderByWithRelationInput";
import { BerryFirmnessWhereInput } from "../../../inputs/BerryFirmnessWhereInput";
import { BerryFirmnessWhereUniqueInput } from "../../../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFirmnessOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BerryFirmnessOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: true
  })
  cursor?: BerryFirmnessWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
